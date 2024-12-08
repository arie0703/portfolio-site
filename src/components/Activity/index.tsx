"use client";
import styles from "@/styles/components/activity.module.scss";
import { ContributionValue, GitHubContributionWeeks } from "@/types/contribution";
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import { useEffect, useState } from "react";

// GitHub APIに送信する情報
const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const headers = {
  'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
}
const body = {
  "query": `query {
      user(login: "${USERNAME}"){
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`
}

export const Activity = () => {

  const [heatmapValue, setHeatmapValue] = useState<ContributionValue[]>([{date: "2023-01-01", count: 0}]);

  const generateContributionValues = (weeks: GitHubContributionWeeks) => {
    const contributionValues: ContributionValue[] = [];

    for (const week of weeks) {
      week.contributionDays.map((obj) => {
        contributionValues.push({count: obj.contributionCount, date: obj.date})
      })
    }

    return contributionValues;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/graphql', 
        { 
          method: 'POST', 
          body: JSON.stringify(body), 
          headers: headers 
        });
      return response;
    };

    (async() => {
      const response = await fetchData();
      const data = await response.json();
      const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
      const contributionValues = generateContributionValues(weeks);
      setHeatmapValue(contributionValues);
    })();

    
  }, []);


  return (
    <div className={styles["activity"]}>
      <HeatMap
        value={heatmapValue}
        startDate={new Date("2024-07-01")}
        panelColors={{
          0: '#161b22',
          1: '#0e4429',
          3: '#006d32',
          5: '#26a641',
          8: '#39d353'
        }}
        rectRender={(props, data) => {
          // if (!data.count) return <rect {...props} />;
          return (
            <Tooltip placement="top" content={`count: ${data.count || 0} date: ${data.date}`}>
              <rect {...props} />
            </Tooltip>
          );
        }}
      />
    </div>
  );
};
