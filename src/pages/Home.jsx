import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>
		</div>
	);
};

export default Home;
