
const Home = () => {

    const onDeleteAll = () => {
        const ids = [23,24]
        // const intid = parseInt(ids)
        const url = `http://10.0.0.237:3003/contactdetailsmultideletes/${ids}`

        let options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        };
        
        fetch(url, options)
          .then(function(response) {
            return response.json();
          })
          .then(function(jsonData) {
            console.log(jsonData);
          });
          
    }

    return(
        <>
            <button onClick={onDeleteAll}>delete</button>
        </>
    )
}

export default Home