        let url=`https://647588cde607ba4797dbfe60.mockapi.io/user`
        console.log(url)


        var itemList=document.getElementById('itemList')

        function createTableRow(value1,value2,id){
            console.log(id)
            var tr=document.createElement('tr')
            var td1=document.createElement('td')
            var td2=document.createElement('td')
            var td3=document.createElement('td')
            td1.setAttribute('id',`name${id}`)
            td2.setAttribute('id',`email${id}`)
            td1.innerHTML=value1;
            td2.innerHTML=value2;
            td3.innerHTML=`
                        <button id='edit${id}'>Edit</button>
                        <button id='delete${id}'onClick='deleteUsersData(${id})'>Delete</button>
            `
            tr.append(td1,td2,td3)
            itemList.append(tr)
        }


        // async await
        // Read

        async function getUsersData(){
            let data=await fetch(url)
            let res=await data.json()
            console.log(res)
            console.table(res)

            // createTableRow(res[0].name,res[0].email)
            // createTableRow(res[1].name,res[1].email)
            res.map((element)=>{
                console.log(element)
                createTableRow(element.name,element.email,element.id)
            })
        }
        getUsersData()

        //Read with id
        // https://647588cde607ba4797dbfe60.mockapi.io/user/3
        // const id=1//passing id as an endpoint
        // console.log(`${url}/${id}`)//template literals
        // console.log(url+"/"+id)//concat

        async function getUsersDataById(id){
            let data=await fetch(`${url}/${id}`)
            let res=await data.json();
            console.log(res)
            createTableRow(res.name,res.email,res.id)

        }
       

        // Create
        async function createUserData(){
            let nameInput=document.getElementById('nameInput').value
            let emailInput=document.getElementById('emailInput').value

            let newUser={
                "name":nameInput,
                "email":emailInput
            }
            let data=await fetch(url,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    // server accept in a string
                    body:JSON.stringify(newUser)
            })
            let res=await data.json()
            console.log(res)
            getUsersDataById(res.id)

        }      

        // 11:55 End
        // 5 min

        // Update by id
        async function updateUsersData(){
            let updateUser={
                "name":"Mr B47 WD",
                "email":"b47guvi@gmail.com"
            }

            let data=await fetch(url+"/5",{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updateUser)
            })
            let res=await data.json()
            console.log(res)
        }
        updateUsersData()
        // End:12:20

        // Delete
        async function deleteUsersData(id){
            console.log(id)
            let data=await fetch(url+"/"+id,{
               method:"DELETE" 
            })
            let res=await data.json();
            console.log(res)
            itemList.innerHTML=""
            getUsersData()

        }
        // CRUD
       
        