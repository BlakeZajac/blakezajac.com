import { getWorkItem } from "@/sanity/utils/get-work";

import WorkOverview from "@/components/layout-work-overview/WorkOverview";

type Props = {
    params: {
        work: string;
    };
};

export default async function WorkItemPage({ params }: Props) {
    const slug = params.work;
    const workItem = await getWorkItem(slug);

    const { overviewTitle, overviewDescription } = workItem;

    return (
        <>
            <WorkOverview title={overviewTitle} description={overviewDescription} />
        </>
    );
}
