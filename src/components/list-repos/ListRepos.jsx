// import './ListRepos.css';

export default function ListRepos({ repos }) {
  return (
    <div>
      {
        repos.map((repo) => {
          return (
            <div className="list-repos-container" key={repo.id}>
              <p>{repo.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}
