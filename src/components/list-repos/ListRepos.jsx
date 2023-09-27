
import { DownCircleOutlined, UpCircleOutlined} from '@ant-design/icons';
import { Tag, Card } from 'antd';
import ReposDetails from '../repo-details/ReposDetails';

import { useState, useEffect } from 'react'
import { api } from "../../api/api-github"
import './ListRepos.css';


export default function ListRepos({ user, repos }) {
  const [repoDetails, setRepoDetails] = useState([]);
  const [expandedRepo, setExpandedRepo] = useState(null);

  const getRepoDetails = async (repo) => {
        try {
      const apirepoDetails = await api.listContent(user.login, repo.name);
      if (apirepoDetails) {
        setRepoDetails(apirepoDetails);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (expandedRepo) {
      getRepoDetails(expandedRepo);
    }
  }, [expandedRepo]);

  return (
    <div>
      {repos.map((repo) => {
        const isExpanded = repo === expandedRepo;
        return (
          <Card>
            <div className="list-repos-container" key={repo.id}>
              <div>
                  <p className='list-repos-repo-name'>{repo.name}</p>
                  {
                    isExpanded ? (
                      <UpCircleOutlined onClick={ () => setExpandedRepo(null)} /> 
                      ) : (
                      <DownCircleOutlined 
                        onClick={() => setExpandedRepo(isExpanded ? null : repo)}
                        />
                      )
                  }
                  <Tag color="default">{repo.language}</Tag>
                  <Tag color="default">{repo.visibility}</Tag>
              </div>
              {isExpanded && <ReposDetails repos={repoDetails} />}
            </div>
          </Card>
        );
      })}
    </div>
  )
}
