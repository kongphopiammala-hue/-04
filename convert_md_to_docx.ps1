$ErrorActionPreference = "Stop"

[string]$workspaceDir = (Get-Location).Path
[string]$mdPath = Join-Path $workspaceDir "WEBSITE_MANUAL.md"
[string]$outDocx = Join-Path $workspaceDir "FANG_FLINT_Website_Manual.docx"

Write-Host "Reading Markdown from: $mdPath"
$lines = [System.IO.File]::ReadAllLines($mdPath, [System.Text.Encoding]::UTF8)

Write-Host "Initializing Word COM..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

try {
  $doc = $word.Documents.Add()

  # 2.0 cm Margins
  $doc.PageSetup.TopMargin = $word.CentimetersToPoints(2.0)
  $doc.PageSetup.BottomMargin = $word.CentimetersToPoints(2.0)
  $doc.PageSetup.LeftMargin = $word.CentimetersToPoints(2.0)
  $doc.PageSetup.RightMargin = $word.CentimetersToPoints(2.0)

  # Color constants (BGR)
  $colOrange = 0x1E4BDC    # RGB(220, 75, 30)
  $colSlate = 0x282013     # RGB(19, 32, 40)
  $colDark = 0x222222
  $colMuted = 0x666666

  function Clean-Markdown($txt) {
    $t = $txt -replace '\*\*(.*?)\*\*', '$1'
    $t = $t -replace '\*(.*?)\*', '$1'
    $t = $t -replace '`', ''
    return $t.Trim()
  }

  $inCodeBlock = $false

  foreach ($rawLine in $lines) {
    $line = $rawLine.TrimEnd()

    # Code block toggle
    if ($line.StartsWith('```')) {
      $inCodeBlock = -not $inCodeBlock
      continue
    }

    if ($inCodeBlock) {
      $para = $doc.Paragraphs.Add()
      $para.Range.Text = "$line`n"
      $para.Range.Font.Name = "Consolas"
      $para.Range.Font.Size = 9.5
      $para.Range.Font.Color = 0x444444
      $para.LeftIndent = $word.CentimetersToPoints(1.0)
      $para.SpaceBefore = 0
      $para.SpaceAfter = 1
      $para.Range.InsertParagraphAfter()
      continue
    }

    # Empty line
    if ([string]::IsNullOrWhiteSpace($line)) {
      continue
    }

    # Horizontal Rule
    if ($line -eq '---') {
      continue
    }

    # Image: ![alt](path)
    if ($line -match '!\[(.*?)\]\((.*?)\)') {
      $caption = $matches[1]
      $relPath = $matches[2]
      $imgPath = Join-Path $workspaceDir ($relPath -replace '/', '\')

      if (Test-Path $imgPath) {
        $pImg = $doc.Paragraphs.Add()
        $pImg.Range.Collapse(0)
        $shape = $doc.InlineShapes.AddPicture($imgPath, $false, $true, $pImg.Range)
        $maxWidth = $word.CentimetersToPoints(16.0)
        if ($shape.Width -gt $maxWidth) {
          $ratio = $maxWidth / $shape.Width
          $shape.Width = $maxWidth
          $shape.Height = $shape.Height * $ratio
        }
        $pImg.Alignment = 1 # Center
        $pImg.SpaceBefore = 8
        $pImg.SpaceAfter = 2
        $pImg.Range.InsertParagraphAfter()

        if (-not [string]::IsNullOrEmpty($caption)) {
          $pCap = $doc.Paragraphs.Add()
          $pCap.Range.Text = "$caption`n"
          $pCap.Range.Font.Name = "Tahoma"
          $pCap.Range.Font.Size = 9.5
          $pCap.Range.Font.Italic = 1
          $pCap.Range.Font.Color = $colMuted
          $pCap.Alignment = 1
          $pCap.SpaceBefore = 0
          $pCap.SpaceAfter = 10
          $pCap.Range.InsertParagraphAfter()
        }
      }
      continue
    }

    # Heading 1: # Title
    if ($line.StartsWith('# ')) {
      $txt = Clean-Markdown ($line.Substring(2))
      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 22
      $p.Range.Font.Bold = 1
      $p.Range.Font.Color = $colOrange
      $p.Alignment = 1
      $p.SpaceBefore = 12
      $p.SpaceAfter = 4
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Blockquote / Subtitle: > text
    if ($line.StartsWith('> ')) {
      $txt = Clean-Markdown ($line.Substring(2))
      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 11.5
      $p.Range.Font.Italic = 1
      $p.Range.Font.Color = $colMuted
      $p.Alignment = 1
      $p.SpaceBefore = 0
      $p.SpaceAfter = 16
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Heading 2: ## Section
    if ($line.StartsWith('## ')) {
      $txt = Clean-Markdown ($line.Substring(3))
      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 15
      $p.Range.Font.Bold = 1
      $p.Range.Font.Color = $colOrange
      $p.SpaceBefore = 14
      $p.SpaceAfter = 6
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Heading 3: ### Subsection
    if ($line.StartsWith('### ')) {
      $txt = Clean-Markdown ($line.Substring(4))
      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 13
      $p.Range.Font.Bold = 1
      $p.Range.Font.Color = $colSlate
      $p.SpaceBefore = 10
      $p.SpaceAfter = 4
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Heading 4: #### Sub-subsection
    if ($line.StartsWith('#### ')) {
      $txt = Clean-Markdown ($line.Substring(5))
      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 11.5
      $p.Range.Font.Bold = 1
      $p.Range.Font.Color = $colDark
      $p.SpaceBefore = 8
      $p.SpaceAfter = 3
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Bullets: * or -
    if ($line -match '^\s*[\*\-]\s+(.*)') {
      $indent = 0.5
      if ($line.StartsWith('   ') -or $line.StartsWith('  ')) { $indent = 1.0 }
      $txt = Clean-Markdown $matches[1]

      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$([char]0x2022) $txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 10.5
      $p.Range.Font.Color = $colDark
      $p.LeftIndent = $word.CentimetersToPoints($indent)
      $p.SpaceBefore = 0
      $p.SpaceAfter = 2.5
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Numbered List: 1. text
    if ($line -match '^\s*(\d+)\.\s+(.*)') {
      $num = $matches[1]
      $txt = Clean-Markdown $matches[2]

      $p = $doc.Paragraphs.Add()
      $p.Range.Text = "$num. $txt`n"
      $p.Range.Font.Name = "Tahoma"
      $p.Range.Font.Size = 10.5
      $p.Range.Font.Color = $colDark
      $p.LeftIndent = $word.CentimetersToPoints(0.6)
      $p.SpaceBefore = 0
      $p.SpaceAfter = 2.5
      $p.Range.InsertParagraphAfter()
      continue
    }

    # Normal paragraph
    $txt = Clean-Markdown $line
    $p = $doc.Paragraphs.Add()
    $p.Range.Text = "$txt`n"
    $p.Range.Font.Name = "Tahoma"
    $p.Range.Font.Size = 11
    $p.Range.Font.Color = $colDark
    $p.SpaceBefore = 0
    $p.SpaceAfter = 6
    $p.Range.InsertParagraphAfter()
  }

  Write-Host "Saving to $outDocx..."
  [ref]$saveRef = $outDocx
  $doc.SaveAs($saveRef)
  Write-Host "SUCCESS: Saved to $outDocx"
}
finally {
  if ($doc) {
    $doc.Close([ref]0)
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($doc) | Out-Null
  }
  if ($word) {
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
  }
  [System.GC]::Collect()
  [System.GC]::WaitForPendingFinalizers()
}
