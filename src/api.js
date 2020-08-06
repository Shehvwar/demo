const newRoomEndpoint =
   "https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall";

/**
 * Create a short-lived room for demo purposes.
 *
 * IMPORTANT: this is purely a "demo-only" API, and *not* how we recommend
 * you create rooms in real production code. In your code, we recommend that you:
 * - Create rooms by invoking the Daily.co REST API from your own backend server
 *   (or from the Daily.co dashboard if you're OK with creating rooms manually).
 * - Pass an "exp" (expiration) parameter to the Daily.co REST endpoint so you
 *   don't end up with a huge number of live rooms.
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily.co REST API to create rooms.
 */
// async function createRoom() {
//   let response = await fetch(newRoomEndpoint),
//        room = await response.json();

//    return room;

//   // Comment out the above and uncomment the below, using your own URL
  //  return { url: "https://shehvwar.daily.co/9U0vAyHIEU2WwBj2bbNe" };
// }
// async function createRoom() {
//   try {
//     let response = await fetch(newRoomEndpoint),
//         room = await response.json();
//     return room;
//   } catch (e) {
//     console.error(e);
//   }
// }
async function createRoom() {
  // let response = await fetch(newRoomEndpoint),
  //   room = await response.json();
  // return room;

  // Comment out the above and uncomment the below, using your own URL
  return { url: "https://shehvwar.daily.co/9U0vAyHIEU2WwBj2bbNe" } ;
}

export default { createRoom };

// const newRoomEndpoint = 'https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall',
//       tokenEndpoint = 'https://dwdd5s2bp7.execute-api.us-west-2.amazonaws.com/default/dailyWWWApiDemoToken';

// async function createRoom() {
//   try {
//     let response = await fetch(newRoomEndpoint),
//         room = await response.json();
//     return room;
//   } catch (e) {
//     console.error(e);
//   }
// }

// async function createMtgLinkWithToken(room, properties={}) {
//   try {
//     let response = await fetch(
//       tokenEndpoint, {
//         method: 'POST',
//         body: JSON.stringify({ properties: {
//           room_name: room.name, ...properties
//         }})
//       },
//     );
//     let token = await response.text();
//     return `${room.url}?t=${token}`;
//   } catch (e) {
//     console.error(e);
//   }
// }
 
//   function combine ()
//   {
//     this.createRoom();
//     this.createMtgLinkWithToken();
//   }

//   export default {combine};