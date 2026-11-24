export default async function checkAuth(){
    const response = await fetch('https://dropblockz.somee.com/CheckAuth', {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    });

    console.log("CheckAuth")
    console.log(response)
    const data = await response.json()
    console.log(data)
    console.log("CheckAuth")

    document.getElementById("nav-user").textContent = data.name

    return data
}