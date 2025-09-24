import axios from "axios";

export async function GetAllSections(){
    try{
     const data=await axios.get("https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/SectionsManagement/GetAllSections");
     console.log(data.data);
     return data.data;
    }catch(error){
     return false;
    }

}

export async function GetItemsBySection(Id:string|undefined){
    try{
     const data=await axios.get(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/GetAllItemsBySectionId/${Id}`);
      
     return data.data;
    }catch(error){
     return false;
    }

}


export async function SearchtemBySection(SectionId:string,Query:string){
    try{
     const data=await axios.get(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/SearchItemBySection&Name&Description/${SectionId},${Query}`);

     return data;
    }catch(error){
     return false;
    }

}

export async function Searchtem(Query:string){
    try{
     const data=await axios.get(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/SearchItemByName&Description/${Query}`);

     return data;
    }catch(error){
     return false;
    }

}


export async function AddNewSection(Name:string){
    try{
     const data=await axios.post(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/SectionsManagement/AddNewSection/${Name}`);
     return data.data;
    }catch(error){
     return false;
    }

}


export async function DeleteSection(id:string){
    try{
     const data=await axios.delete(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/SectionsManagement/DeleteSection/${id}`);
     return data.data;
    }catch(error){
     return false;
    }

}



export async function UpdateSection(id:string,name:string){
    try{
     const data=await axios.put(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/SectionsManagement/UpdateSectionName/${id},${name}`);
     return data.data;
    }catch(error){
     return false;
    }

}


export interface UpdateItem{
    id:string,
    title:string,
    description:string,
    file:File
}


export interface AddItem{
    type:string,
    sectionId:string,
    title:string,
    description:string,
    file:File
}

export async function AddItem(form:AddItem){
    try{
     const data=await axios.post('https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/AddNewItem/',form);
     return data.data;
    }catch(error){
     return false;
    }

}



export async function UpdateItem(form:UpdateItem){
    try{
     const data=await axios.put('https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/UpdateItem/',form);
     return data.data;
    }catch(error){
     return false;
    }

}

export async function DeleteItem(id:string){
    try{
     const data=await axios.delete(`https://uni-files-b0hqcchggqe0ehfq.spaincentral-01.azurewebsites.net/api/ItemsManagement/DeleteItemById/${id}`);
     return data.data;
    }catch(error){
     return false;
    }

}
