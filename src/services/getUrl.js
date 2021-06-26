export default function getUrl() {
    //Here I get the url params
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
        departure: urlParams.get("from"),
        arrival: urlParams.get("to"),
        date: urlParams.get("date")
    }
}
