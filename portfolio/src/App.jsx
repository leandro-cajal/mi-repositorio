import Header from './components/Header'
import Presentation from './components/Presentation'

function App() {

  return (
    <>
      <div className='bg-gray-50 font-sans dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full'>
        <Header />
        <div className='max-w-4xl mx-auto'>
          <Presentation />
          <div className='flex flex-col gap-96'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex omnis totam vero eum porro iure eaque laboriosam atque, iste ullam minus recusandae nostrum quos architecto cumque dicta esse quod!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil voluptatem dolorum veritatis quam quod officiis hic omnis velit sed. Optio, distinctio impedit exercitationem porro accusamus itaque quae quas nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil voluptatem dolorum veritatis quam quod officiis hic omnis velit sed. Optio, distinctio impedit exercitationem porro accusamus itaque quae quas nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil voluptatem dolorum veritatis quam quod officiis hic omnis velit sed. Optio, distinctio impedit exercitationem porro accusamus itaque quae quas nesciunt.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
