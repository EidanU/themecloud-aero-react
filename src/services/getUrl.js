export default function getUrl() {
    //Here I get the url, split params into an object and return it so i can easely get the data that I want by calling the function 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
        departure: urlParams.get("from"),
        arrival: urlParams.get("to"),
        date: urlParams.get("date")
    }
}
