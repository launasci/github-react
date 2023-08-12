import './ListRepos.css';

export default function ListRepos({ repos }) {
  return (
    <div>
      {
        repos.map((repo) => {
          return (
            <div key={repo.id}>
              <p>{repo.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}
