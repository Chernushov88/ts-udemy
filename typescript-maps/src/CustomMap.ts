// Instructions to order classes how to be an argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
   this.googleMap = new google.maps.Map(document.getElementById(mapDivId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    })
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}