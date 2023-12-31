import { Friend, Colleague, EmailContact} from './myTypes';
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}`
}

console.log(older(friends[0]))


const allOlder = (f: Friend[]) => f.map((fs) => `${fs.name} is now ${fs.age+=1}`)

console.log(allOlder(friends))


const findFriends = (
  f: Friend[], keyWord: Function
) =>
  f.map((fs) => { if (keyWord(fs)) return fs.name })

console.log(findFriends(friends, (friend: Friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend: Friend) => friend.age < 35));


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));


function addInterest(f: Friend, interest: string) {
  if (f.interests === undefined || f.interests === null) return "";
  if (interest === undefined || interest === null || interest === "") return "";

  f.interests.push(interest);
  return f.interests;
}

console.log(addInterest(friends[1], 'Politics'))


function addColleague(cs: Colleague[], name: string, dept: string, email: string ) {
    const colleague: Colleague = {
        name: name,
        department: dept,
        contact: {
            email: email,
            extension: (highestExtension(cs).contact.extension+1),
        },
    };
    cs.push(colleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));
