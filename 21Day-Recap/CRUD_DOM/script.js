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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=#exampleModal${id} id='edit${id}'
            onClick="getEditid('${id}','${value1}','${value2}')"
            >
            Edit
            </button>
             <button  class="btn btn-danger"id='delete${id}'onClick='deleteUsersData(${id})'>Delete</button>
            `
            tr.append(td1,td2,td3)
            itemList.append(tr)
        }


        
function getEditid(id,value1,value2){
    console.log(id,value1,value2)
    const modal=document.createElement('span');
    console.log(modal)
    modal.innerHTML=
    `   <div class="modal fade" id=exampleModal${id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body border">

                    <div class="form-group row">
                        <label for=modalname${id} class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id=modalname${id} value=${value1}>
                    </div>

                    <div class="form-group row">
                        <label for=modalemail${id} class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id=modalemail${id} value=${value2}>
                    </div>
                </div>
                
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick='updateUsersData(${id})'>Save changes</button>
                </div>
                </div>
            </div>
        </div>
    `;
    document.body.append(modal)
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
        async function updateUsersData(id){
            var modalName=document.getElementById('modalname'+id).value
            var modalEmail=document.getElementById('modalemail'+id).value
            console.log(modalName,modalEmail)
            let updateUser={
                "name":modalName,
                "email":modalEmail
            }

            let data=await fetch(url+"/"+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updateUser)
            })
            let res=await data.json()
            console.log(res)
            document.getElementById('name'+id).innerText=res.name
            document.getElementById('email'+id).innerText=res.email
        }
        // updateUsersData()
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
       
        