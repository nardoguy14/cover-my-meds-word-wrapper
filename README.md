# cover-my-meds-word-wrapper

## Dependencies

1. brew
https://brew.sh
2. npm
`brew install npm`
3. packages
`npm install`

## Running Script

    npm start

    Parameters

    [fileName] [max length of lines]

## Solution Design

The approach taken to wrap words consisted of the following steps.
1. read each line from the text file and store it in an array
2. for each paragraph in the array, break it down to a single line
3. now that an array exist of either only a single line or an empty line,
   iterate through each line breaking the line up into chunks of MaxLength
   defined in the input
4. for each chunk, save it into a new output document array
5. print new formatted document

## Running Tests

`npm test`
