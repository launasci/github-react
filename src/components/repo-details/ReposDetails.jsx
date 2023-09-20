export default function ReposDetails({ repos }) {
  return (
    <div className="repo-details">
      {repos.map((repo, index) => {
        return (
          <div key={index}>
            <p>
              {repo.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}