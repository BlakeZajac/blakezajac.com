import WorkOverview from "@/components/layout-work-overview/WorkOverview";
import { getWork, getWorkItem } from "@/sanity/utils/get-work";

const WorkItemPage = () => {
    return (
        <>
            <WorkOverview
                title="Sydney Short Courses: propel your career"
                description={[
                    "The University of Sydney, a prestigious institution ranked 18th globally and 1st in Australia across various disciplines, sought to expand its educational reach beyond traditional degree programs.",
                    "The goal was to create a platform that would empower professionals at every stage of their careers with cutting-edge skills and knowledge. This vision led to the development of the Sydney Short Courses website, built on the onCourse CMS.",
                ]}
            />
        </>
    );
};

export default WorkItemPage;
