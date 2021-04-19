import { useRouter } from 'next/router';

function ClientProjectPage() {

const router = useRouter();

console.log(router.query);

function loadProjecHandler(){
  router.push({
    pathname:'/clients/[id]/[clientprojectid]',
    query: {id: 'max', clientprojectid:'srini'}
  })
}

  return (
    <div>
      <h1>The project of a Given Client</h1>
      <button onClick={loadProjecHandler}> check Me</button>
    </div>
  );
}

export default ClientProjectPage;
