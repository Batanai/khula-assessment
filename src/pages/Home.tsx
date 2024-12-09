import Button from "../components/Button"
import HomeTableSection from "../components/HomeTableSection"
import tableData from '../data/homeTableData'

const Home = () => {

    return (
        <div className="bg-white w-full h-screen pt-24 px-8 xl:px-16 absolute top-0">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Your Application Checklist
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Complete the following to submit the application.
            </p>
          </div>
          <Button
            text="Start Application"
            onClick={() => alert("Start Application clicked!")}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500"
          />
        </div>
  
        {/* Table Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 h-[calc(100%-200px)]">
          {tableData.map((section, index) => (
            <HomeTableSection
              key={index}
              title={section.title}
              description={section.description}
              checkboxes={section.checkboxes}
            />
          ))}
        </div>
      </div>
    )
  }
  
  export default Home