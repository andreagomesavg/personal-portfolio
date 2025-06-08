import { motion } from 'framer-motion'

export default function LoadingPage() {
  // Variantes de animación para el avión
  const planeVariants = {
    animate: {
      y: [0, -20, 0, -10, 0],
      rotate: [0, -5, 0, 3, 0],
      scale: [1, 1.1, 1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Movimiento en figura 8 para el contenedor del avión
  const containerVariants = {
    animate: {
      x: [0, 30, 0, -30, 0, -30, 0, 30, 0],
      y: [0, -15, -30, -15, 0, 15, 30, 15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Animación de la estela
  const trailVariants = {
    animate: {
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

//   // Animación de texto de loading
//   const textVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 1, ease: "easeOut" }
//     }
//   }

//   // Animación de puntos
//   const dotVariants = {
//     animate: {
//       scale: [1, 1.5, 1],
//       opacity: [0.5, 1, 0.5],
//       transition: {
//         duration: 0.8,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   }

 

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <div className="min-h-screen flex items-center justify-center relative">
        
        {/* Contenedor del avión de papel */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          animate="animate"
        >
          {/* Ícono del avión de papel */}
          <motion.div
            variants={planeVariants}
            animate="animate"
            className="relative z-10"
          >
            <i className="fa-regular fa-paper-plane text-6xl text-gray-600"></i>
          </motion.div>
          
          {/* Efecto de estela */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <motion.div 
              className="w-2 h-2 bg-gray-300 rounded-full absolute"
              variants={trailVariants}
              animate="animate"
            />
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-200 rounded-full absolute"
              style={{ left: '-20px' }}
              variants={trailVariants}
              animate="animate"
              transition={{ delay: 0.2 }}
            />
            <motion.div 
              className="w-1 h-1 bg-gray-100 rounded-full absolute"
              style={{ left: '-35px' }}
              variants={trailVariants}
              animate="animate"
              transition={{ delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Texto de loading
        <motion.div 
          className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
       
          <div className="flex flex-col items-center justify-center space-x-1">
            <span className="text-gray-500">Loading</span>
            <div className="flex space-x-1">
              <motion.div 
                className="w-1 h-1 bg-gray-800 rounded-full"
                variants={dotVariants}
                animate="animate"
              />
              <motion.div 
                className="w-1 h-1 bg-gray-800 rounded-full"
                variants={dotVariants}
                animate="animate"
                transition={{ delay: 0.2 }}
              />
              <motion.div 
                className="w-1 h-1 bg-gray-800 rounded-full"
                variants={dotVariants}
                animate="animate"
                transition={{ delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div> */}

       

        {/* Partículas flotantes adicionales */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-gray-200 rounded-full"
              style={{
                top: `${20 + index * 10}%`,
                left: `${15 + index * 12}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}