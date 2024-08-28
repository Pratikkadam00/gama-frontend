export const getProjectInfoWithId(projectId,projectList)=>{
    const filterData = projectList.filter((project)=> projectId === project._id)
    return filterData.length ? filterData[0] : {}

}