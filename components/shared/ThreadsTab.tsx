interface Props{
  currentUserId:string;
  accountId:string;
  accountType:string;
}
const ThreadsTab =({currentUserId,
  accountId,
  accountType}:Props)=>{
    let result = await fetchUserPosts(accountId)
    if(!result) redirect('/');
  return(
    <section>ThreadsTab</section>
  )
}
export default ThreadsTab;