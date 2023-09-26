import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

function sort<T>( data : T[], criteria: (a:T,b:T) => number ) : T[] | undefined {
    return data.sort((criteria));
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);

// // Find the colleague with the highest extension number.
// function highestExtension(cs: Colleague[]) {
//   const result = cs.sort(
//     (c1, c2) => c1.contact.extension - c2.contact.extension
//   );
//   return result[cs.length - 1];
// }

// function sortColleagues(
//   colleagues: Colleague[],
//   sorter: (c1: Colleague, c2: Colleague) => number,
//   max? : number
// ): EmailContact[] {
//   let end = colleagues.length;
//   if (max !== undefined) {
//      end = max < 2 ? 1 : max
//   }
//   const sorted = colleagues.sort(sorter);
//   const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
//   return fullResult.slice(0,end)
// }
