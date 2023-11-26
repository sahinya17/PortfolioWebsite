import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const BackgroundAnimation = () => {
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#3BBA9C"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const containerStyle = {
    backgroundColor: "#2E3047",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <Particles options={options} init={particlesInit} />
    </div>
  );
};

export default BackgroundAnimation;