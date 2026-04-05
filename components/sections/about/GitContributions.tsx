import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import GitContributionsClient from "./GitContributionsClient";

interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const githubUsername = 'isderky';

const GitContributions = async () => {
  let data: GitHubActivity[] = [];

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    data = json.contributions ?? [];
  } catch {
    // data stays empty, client handles the empty state
  }

  const totalContributions = data.reduce((sum, day) => sum + day.count, 0);

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={1.1}>
        <GitContributionsClient
          data={data}
          totalContributions={totalContributions}
          githubUsername={githubUsername}
        />
      </FadeInElement>
    </Section>
  );
};

export default GitContributions;
