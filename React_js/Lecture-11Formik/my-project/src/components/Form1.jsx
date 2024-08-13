import React from 'react'

// ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$
// /
// i
// ^ asserts position at start of the string
// Match a single character present in the list below [A-Z0-9._%+-]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
// ._%+- matches a single character in the list ._%+- (case insensitive)
// @ matches the character @ with index 6410 (4016 or 1008) literally (case insensitive)
// Match a single character present in the list below [A-Z0-9.-]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
// .- matches a single character in the list .- (case insensitive)
// \. matches the character . with index 4610 (2E16 or 568) literally (case insensitive)
// Match a single character present in the list below [A-Z]
// {2,} matches the previous token between 2 and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
// Global pattern flags 
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

const Form1 = () => {
  return (
    <div>
      
    </div>
  )
}

export default Form1
