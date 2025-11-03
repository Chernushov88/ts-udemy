// import { User } from './User.ts'
// import { Company } from './Company.ts'
// import type { MapOptions } from 'google.maps'




// const user = new User()
// const company = new Company()
// console.log(user)
// console.log(company)
// console.log(google)

// export function initMap() {
//   const mapDiv = document.getElementById('map') as HTMLElement

//   const map = new google.maps.Map(mapDiv, {
//     zoom: 2,
//     center: { lat: 0, lng: 0 },
//   })
// }

// робимо функцію глобальною, щоб її викликав Google Maps API
// ;(window as any).initMap = initMap

// declare const google: any

const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 3,
  center: { lat: 0, lng: 0 }
})