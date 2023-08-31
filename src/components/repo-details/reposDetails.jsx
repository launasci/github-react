export default function RepoDetails({ repoContent }) {
  return (
    <div className="repo-details">
      {repoContent.map((item, index) => {
        return (
          <>
            <p>
              {item.name}
            </p>
          </>
        )
      })}
    </div>
  )
}
