# Define the directory path of your site
$directory = "C:\Users\dicky\repos\Bearcraftmusic\bearcraftmusic"
$directories = @("$($directory)\public", "$($directory)\src")

# Initialize an empty string to store the concatenated contents
$allContents = ""

# Loop through each directory
foreach ($directory in $directories) {
    # Get all CSS and JS files recursively
    $files = Get-ChildItem -Path $directory -Recurse -Include *.css, *.js

    # Loop through each file
    foreach ($file in $files) {
        # Get the filename and path
        $filename = $file.Name
        $filepath = $file.FullName

        # Read the contents of the file
        $contents = Get-Content -Path $filepath -Raw

        # Concatenate the contents with the filename and path
        $allContents += "Filename: $filename`n"
        $allContents += "Path: $filepath`n"
        $allContents += "Contents:`n"
        $allContents += $contents
        $allContents += "`n`n"
    }
}

# Output the concatenated contents to the clipboard
"This is the structure and the contents of the site:
 " +$allContents | Set-Clipboard
