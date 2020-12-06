import worldwide from "../assets/projects/worldwide.jpg";
import HouseOptimizer_screenshot from "../assets/projects/HouseOptimizer_screenshot.png";
import weatherdashboard from "../assets/projects/weatherdashboard.jpg";
import Quiz from "../assets/projects/Quiz.jpg";
import readmegenerator from "../assets/projects/readmegenerator.png";
import WorkdayPlanner from "../assets/projects/WorkdayPlanner.jpg";

let project_list = [
	{
		image: worldwide,
		title: 'Worldwide Covid-19 Tracker',
		des:
			" With COVID-19 being a universal struggle at this very moment, the absence of credible and consistent information surrounding COVID-19 is a major source of anxiety for several people worldwide. It is important that there are tools available to keep track of its spread, both locally and abroad. This motivated us to develop an application that tracked COVID-19 statistics not because of its challenging nature, but because of its timeliness as a humanitarian issue and the opportunity to utilize varying technologies we have learned in class in such a way that would prove our choice useful as a tool to monitor the spread of the disease.",
		tags: [ 'HTML', 'CSS', 'React', 'Redux','Firebase', 'JavaScript' ],
		links: {
			launch: 'https://afazeez82.github.io/worldwidecovid19-githubio.com',
			github: 'https://github.com/afazeez82/worldwidecovid19-githubio.com'
		}
	},
	{
		image: HouseOptimizer_screenshot,
		
		title: 'HouseHold Optimizer',
		des:
			"Families and individuals often find themselves bringing home food and household items from stores they already have plenty of in stock An application to track all items present within the home and share with users would help save money and keep house stocked with inventory The added functionality of creating and managing multiple shopping lists which can be assigned to users",
		tags: [ 'HTML', 'CSS', 'Javascript','nodejs','ReactJs' ],
		links: {
			launch: 'https://vast-mesa-04959.herokuapp.com/',
			github: 'https://github.com/jlcalderon/project-2'
		}
	},
	{  /* -------------------------------- */
		image: weatherdashboard,
		title: 'Weatherapp dashboard',
		des:
			"This is a simple java script application that provides the ability to search for a city in united states and view its most current weather. It also displays the user the 5 day forecast for the searched city.",
		tags: [ 'CSS', 'React', 'JavaScript' ],
		links: {
			launch: 'https://afazeez82.github.io/weatherapp.githubio.com/',
			github: 'https://github.com/afazeez82/weatherapp.githubio.com'
		}
	},
	{/* -------------------------------- */
		image: Quiz,
		title: 'JavaScritp Quiz game',
		des:
			"This is a simple java script quiz given in a game format. Helpul for new commers in the coding world to test their java script skills.",
		tags: [ 'HTML', 'CSS', 'JavaScript', 'JQuery' ],
		links: {
			launch: 'https://afazeez82.github.io/JSQuiz-githubio.com/',
			github: 'https://github.com/afazeez82/JSQuiz-githubio.com'
		}
	},
	{/* -------------------------------- */
		image: WorkdayPlanner,
			
		title: 'Workday Planner',
		des:
			"This is a simple daily work planner that can be used to set you appointments and meetings.",
		tags: [ 'React', 'HTML', 'CSS', 'JavaScript' ],
		links: {
			launch: 'https://afazeez82.github.io/dayplanner.githubio.com/',
			github: 'https://github.com/afazeez82/dayplanner.githubio.com'
		}
	},
	{/* -------------------------------- */
		image:
			'https://drive.google.com/uc?id=1DXb4hG4d3MDNJA0iBclYGC4JJJU53xzw',
		title: 'JavaScript Clock',
		des:
			"Javascript Clock is an application built with VanillaJS , where local time is fetched and shown in a clock. It has hour, minute and second hands",
		tags: ['HTML', 'CSS', 'JavaScript' ],
		links: {
			launch: 'https://faizhameed.github.io/JavascriptClock/',
			github: 'https://github.com/faizhameed/JavascriptClock'
		}
	}
];

export default project_list;
