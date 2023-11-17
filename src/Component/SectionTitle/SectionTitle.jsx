
// eslint-disable-next-line react/prop-types
const SectionTitle = ({title}) => {
    return (
      <div className="bg-orange-400 rounded-xl hover:bg-green-400">
        <div className="list-disc text-2xl font-bold p-2 mt-5">    
        <li>{title}</li>
      </div>
      </div>
    );
};

export default SectionTitle;