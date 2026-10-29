/* Project content: add an object here to create a case study. */
window.PORTFOLIO_PROJECTS = [
  {
    "id": "frisbee-launcher",
    "number": "01",
    "title": "Motorized Frisbee Launcher",
    "descriptor": "Electromechanical design · Iterative prototyping",
    "year": "2026",
    "categories": [
      "Mechanical",
      "Systems"
    ],
    "featured": true,
    "image": "assets/media/frisbee-final-build.webp",
    "role": "Team Lead · Mechanical Design & Integration",
    "timeline": "March 2026",
    "summary": "Designed, built, and tested a flywheel-based disc launcher integrating a curved guide track, servo feed mechanism, DC motor, and Arduino control.",
    "metrics": [
      [
        "30 cm",
        "Flywheel diameter"
      ],
      [
        "1.4 kg",
        "Flywheel mass"
      ],
      [
        "45 sec",
        "Recorded spin-up time"
      ]
    ],
    "challenge": "Build a low-cost launcher that gives a disc stable flight, repeatable feed, and adjustable launch behavior. The original requirements included a ≥95% feed-success target and a 15 m range target; these were goals, not verified outcomes in the final report.",
    "process": [
      [
        "Compare concepts",
        "Tested cardboard mockups of straight versus curved tracks. The curved geometry provided longer contact time between the flywheel and disc."
      ],
      [
        "Engineer the mechanism",
        "Sized a 30 cm laser-cut, 1.4 kg flywheel and added a rubberized edge to improve friction. Designed a curved guide and adjustable support structure."
      ],
      [
        "Integrate electronics",
        "Combined a DC motor, driver, Arduino, buck converter, and servo-based feed. Used motor ramp-up and timed servo motion."
      ],
      [
        "Diagnose and iterate",
        "Tested the shaft mount, track, legs, and servo paddle; identified flywheel height, servo alignment, and structural stiffness as limiting issues."
      ]
    ],
    "result": "The assembled prototype demonstrated repeatable short-range launches, shown in the demonstration video. The final report also documents unresolved loading and mounting issues. Motor spin-up took approximately 45 seconds versus the original 10-second goal, after a motor-shipping issue.",
    "contribution": "Four-person team project; led coordination and contributed to mechanical design, fabrication, integration, and testing. Distinguish individual work from team results when presenting the project.",
    "tools": [
      "Mechanical design",
      "Laser cutting",
      "Arduino",
      "Motor driver",
      "Servo actuation",
      "Flywheel sizing",
      "Testing"
    ],
    "nextSteps": "Add individually measured launch speed, range, and loading reliability once supporting test data are available.",
    "imageAlt": "Annotated photographs of the completed motorized frisbee launcher, flywheel, track and electronics from the final team report",
    "imageLabel": "FROM PROJECT REPORT",
    "gallery": [
      {
        "src": "assets/media/frisbee-final-build.webp",
        "alt": "Fully assembled launch mechanism showing guide bucket, flywheel, motor and servo",
        "caption": "Completed flywheel launcher and servo-based feed (final report, p. 5)"
      },
      {
        "src": "assets/media/frisbee-flywheel-detail.webp",
        "alt": "Flywheel with grip strip and curved track wall in assembled launcher",
        "caption": "Flywheel and curved-wall geometry with adjustable supports (final report, p. 5)"
      },
      {
        "src": "assets/media/frisbee-electronics.webp",
        "alt": "Actual electronics wiring including Arduino, DC motor driver, buck converter, and servo",
        "caption": "Integrated Arduino, motor driver and power electronics (final report, p. 5)"
      },
      {
        "src": "assets/media/frisbee-shaft-mount-cad.webp",
        "alt": "Exploded-view diagram of flywheel and shaft collar coupling",
        "caption": "Shaft coupling and flywheel assembly CAD (final report, p. 5)"
      },
      {
        "src": "assets/media/frisbee-schematic.webp",
        "alt": "Circuit schematic for motor driver and embedded controller",
        "caption": "Electronics and drive circuit concept (final report, p. 2)"
      },
      {
        "src": "assets/media/frisbee-first-prototype.webp",
        "alt": "Cardboard curved-track experiment used to compare launching concepts",
        "caption": "Early cardboard proof-of-concept and curved-track layout (final report, p. 1)"
      }
    ],
    "video": {
      "src": "assets/media/frisbee-launch-demo.mp4",
      "poster": "assets/media/frisbee-final-build.webp",
      "caption": "Actual launcher demonstration. The video illustrates operation; no launch speed or range was measured from this clip."
    },
    "documents": [
      {
        "label": "Read the final project report (PDF)",
        "href": "documents/frisbee-launcher-report.pdf"
      }
    ],
    "sourceNote": "Design requirements, mechanisms, and the 45-second spin-up figure are taken from the supplied team final report. Do not treat the design targets as independently verified results."
  },
  {
    "id": "jumper-robot",
    "title": "Single-Use Jumping Robot",
    "descriptor": "Mechanical design · Rapid iteration",
    "year": "2026",
    "categories": [
      "Mechanical",
      "Systems"
    ],
    "featured": true,
    "image": "assets/media/jumper-device-cover.webp",
    "imageAlt": "Full jumping-robot prototype with elastic bands, lightweight frame, and trigger mechanism, cropped from the original demonstration video",
    "imageLabel": "ACTUAL DEMONSTRATION",
    "role": "Robotics Mini Project · Prototype & Test",
    "timeline": "2026",
    "summary": "Built and demonstrated a compact jumping robot with a stored-energy launch mechanism and an improvised single-use release.",
    "metrics": [
      [
        "17 in",
        "Reported jump height"
      ],
      [
        "01",
        "Single-use release"
      ],
      [
        "Video",
        "Recorded test"
      ]
    ],
    "challenge": "Produce a vertical jump with a small, lightweight mechanical system while developing a release mechanism that triggers the stored energy reliably.",
    "process": [
      [
        "Build the structure",
        "Constructed a lightweight prototype using simple structural elements, elastic energy storage, and a release mechanism."
      ],
      [
        "Resolve the trigger",
        "The original latch was not strong or reliable enough. Switched to a sacrificial breakable-stick release for a controlled one-time actuation."
      ],
      [
        "Demonstrate",
        "Recorded a classroom test with a tape-measure height reference beside the robot."
      ]
    ],
    "result": "The prototype successfully jumped in the recorded demonstration. A height of 17 inches was previously reported for the project; that figure is not independently confirmed from the video frames alone.",
    "contribution": "Mini project involving physical prototyping and creative troubleshooting of a failed release mechanism.",
    "tools": [
      "Rapid prototyping",
      "Mechanical mechanisms",
      "Energy storage",
      "Experimental testing"
    ],
    "video": {
      "src": "assets/media/robot-jumper-demo.mp4",
      "poster": "assets/media/jumper-device-cover.webp",
      "caption": "Original classroom jumping-robot demonstration, with tape measure for scale."
    },
    "gallery": [
      {
        "src": "assets/media/jumper-device-cover.webp",
        "alt": "Full jumping robot with wooden-stick frame, elastic bands, and central assembly",
        "caption": "Completed prototype — close-up from the original demonstration"
      },
      {
        "src": "assets/media/jumper-release-prep.webp",
        "alt": "Hands preparing the jumping robot release mechanism before its demonstration",
        "caption": "Preparing the prototype for the jump"
      },
      {
        "src": "assets/media/jumper-in-flight.webp",
        "alt": "Jumping robot airborne beside a measuring tape during the recorded test",
        "caption": "Robot in flight, captured from the demonstration video"
      }
    ],
    "documents": [],
    "sourceNote": "The demonstration video is provided; the reported 17-inch result and breakable-stick trigger are from the earlier project description.",
    "nextSteps": "Add a release-mechanism CAD view, energy calculation, or close-up photo if available.",
    "number": "02"
  },
  {
    "id": "atom-iq",
    "number": "03",
    "title": "ATOM-IQ Modular Lab Infrastructure",
    "descriptor": "Structural CAD · Research infrastructure",
    "year": "2026",
    "categories": [
      "Mechanical",
      "Systems"
    ],
    "featured": true,
    "image": "assets/media/atom-iq-overhead-assembly.webp",
    "role": "Undergraduate Research Assistant",
    "timeline": "January – May 2026",
    "summary": "Designed modular 80/20 aluminum-extrusion hardware for an autonomous materials-testing laboratory, including a supported overhead-storage assembly.",
    "metrics": [
      [
        "80/20",
        "Aluminum extrusion"
      ],
      [
        "CAD",
        "Assembly model"
      ],
      [
        "60+",
        "Undergraduate coordination"
      ]
    ],
    "challenge": "Create adaptable modular structural infrastructure that provides mechanical support and accommodates equipment integration across a multidisciplinary research laboratory.",
    "process": [
      [
        "Establish interfaces",
        "Gathered mounting and physical-layout requirements across laboratory experiments and participating groups."
      ],
      [
        "Design the assembly",
        "Modeled a modular overhead-storage frame in SolidWorks using 80/20 extrusion components and foot assemblies."
      ],
      [
        "Coordinate integration",
        "Contributed to coordination across a large undergraduate team developing laboratory infrastructure."
      ]
    ],
    "result": "Created the supplied overhead-storage assembly CAD and contributed to a broader infrastructure effort that involved more than $40,000 of 80/20 components. This is one assembly, not a representation of the entire laboratory.",
    "contribution": "Designed mechanical support assemblies and coordinated implementation needs as an undergraduate research assistant.",
    "tools": [
      "SolidWorks",
      "80/20 extrusions",
      "Mechanical assembly",
      "Interface coordination"
    ],
    "nextSteps": "Add a close-up of the mates, fasteners, structural constraints, and an approved photograph of the installed assembly.",
    "imageAlt": "SolidWorks preview of aluminum extrusion overhead storage assembly supported by four legs",
    "imageLabel": "ACTUAL ASSEMBLY CAD",
    "gallery": [
      {
        "src": "assets/media/atom-iq-overhead-assembly.webp",
        "alt": "Isometric rendering of the user-provided 80/20 overhead-storage assembly",
        "caption": "Actual SolidWorks assembly preview from the supplied CAD archive"
      }
    ],
    "documents": [],
    "sourceNote": "The supplied archive includes native SolidWorks assembly and part files. The website displays the preview image only, not the editable CAD or other lab files. Confirm research-group permission before publicly posting this image."
  },
  {
    "id": "lug-wrench-fea",
    "title": "Lug Wrench: FEA & Redesign",
    "descriptor": "Structural analysis · SolidWorks Simulation",
    "year": "2026",
    "categories": [
      "Analysis",
      "Mechanical"
    ],
    "featured": true,
    "image": "assets/media/lug-wrench-original-stress.webp",
    "imageAlt": "Von Mises stress contour from original lug-wrench model showing concentration at bend",
    "imageLabel": "SOLIDWORKS FEA RESULT",
    "role": "Finite Element Analysis Course Project",
    "timeline": "2026",
    "summary": "Modeled realistic wrench loading, refined the mesh around the critical bend, and redesigned the handle to lower calculated stress below material yield.",
    "metrics": [
      [
        "7",
        "Mesh study iterations"
      ],
      [
        ">99%",
        "Mesh elements with aspect ratio <3"
      ],
      [
        "Redesign",
        "Stress below yield"
      ]
    ],
    "challenge": "Evaluate whether a bent lug wrench can withstand high user-applied loads without yielding and determine the most effective geometric improvement.",
    "process": [
      [
        "Model loading",
        "Built a SolidWorks model using commercial wrench dimensions, AISI 1045 material, distributed force near the handle end, and socket-face restraints."
      ],
      [
        "Check mesh quality",
        "Ran a seven-iteration mesh study, refining elements around the bend where stresses concentrated. The report documented >99% of elements with aspect ratio <3."
      ],
      [
        "Redesign and retest",
        "Increased the handle diameter by a few millimeters and repeated the analysis using the same load and restraints."
      ]
    ],
    "result": "The baseline simulation exceeded the selected material yield threshold at the wrench bend and head interface. The redesigned model reduced reported peak stress below yield under the same modeled load.",
    "contribution": "Developed the model and simulation workflow as part of a course analysis, including refinement, interpretation, and documentation.",
    "tools": [
      "SolidWorks Simulation",
      "Static FEA",
      "Mesh convergence",
      "Von Mises stress",
      "Design iteration"
    ],
    "gallery": [
      {
        "src": "assets/media/lug-wrench-original-stress.webp",
        "alt": "Original lug wrench stress simulation showing concentration at the bend",
        "caption": "Original design: stress concentration at the bend (report, p. 6)"
      },
      {
        "src": "assets/media/lug-wrench-revised-stress.webp",
        "alt": "Revised lug wrench von Mises stress simulation showing reduced stress values",
        "caption": "Updated handle diameter: lower peak stress (report, p. 7)"
      },
      {
        "src": "assets/media/lug-wrench-convergence.webp",
        "alt": "Maximum stress versus mesh refinement iteration graph",
        "caption": "Seven-iteration mesh refinement study (report, p. 3)"
      },
      {
        "src": "assets/media/lug-wrench-mesh-control.webp",
        "alt": "SolidWorks selected mesh-control region at wrench bend",
        "caption": "Local mesh control at the critical bend (report, p. 4)"
      }
    ],
    "documents": [
      {
        "label": "Read the FEA report (PDF)",
        "href": "documents/lug-wrench-fea-report.pdf"
      }
    ],
    "sourceNote": "Results are from SolidWorks simulations and are conditional on the modeled load, restraints, and material—not physical failure tests.",
    "nextSteps": "Add a hand-calculated bending-stress sanity check and clarify nominal applied load in a visual.",
    "number": "04"
  },
  {
    "id": "bed-frame-fea",
    "title": "Bed Frame: Mass Optimization",
    "descriptor": "Structural optimization · Fusion 360",
    "year": "2026",
    "categories": [
      "Analysis",
      "Mechanical"
    ],
    "featured": true,
    "image": "assets/media/bed-frame-before-after.webp",
    "imageAlt": "Comparison between initial welded metal bed frame and shape-optimized design with material removed from cross members",
    "imageLabel": "ACTUAL OPTIMIZATION RESULT",
    "role": "Finite Element Analysis Course Project",
    "timeline": "2026",
    "summary": "Reduced simulated mass of a welded steel bed-frame model by 25% while keeping calculated stress below yield under the selected loading conditions.",
    "metrics": [
      [
        "25%",
        "Model mass reduction"
      ],
      [
        "143 → 306 psi",
        "Initial → final peak stress"
      ],
      [
        "300 lb",
        "Full-frame design load"
      ]
    ],
    "challenge": "Remove unnecessary structural mass while retaining acceptable strength and stiffness under a representative mattress-and-occupant loading scenario.",
    "process": [
      [
        "Construct the study",
        "Modeled a quarter of the welded frame with ASTM A36 steel and represented a 300 lb total distributed design load using symmetry and appropriate supports."
      ],
      [
        "Diagnose the first optimization",
        "An unconstrained shape-optimization run removed leg structures that needed to remain functional. Updated the preserved-geometry regions around supports."
      ],
      [
        "Iterate and compare",
        "Explored 90% and 75% retained-mass thresholds and compared the initial and optimized von Mises stress distributions."
      ]
    ],
    "result": "The final modeled design retained 75% of its original mass. Reported maximum von Mises stress rose from 143 psi to 306 psi while staying below the A36 yield criterion used in the study. These are simulation findings, not a fabricated prototype test.",
    "contribution": "Built and evaluated the structural analysis/optimization study with geometry preservation, load assumptions, and comparison of outcomes.",
    "tools": [
      "Fusion 360",
      "Shape optimization",
      "Structural FEA",
      "Load modeling",
      "A36 steel"
    ],
    "gallery": [
      {
        "src": "assets/media/bed-frame-before-after.webp",
        "alt": "Unmodified and mass-optimized bed frame CAD geometry shown side by side",
        "caption": "Initial design and 25%-lighter optimized geometry (report, p. 6)"
      },
      {
        "src": "assets/media/bed-frame-optimization.webp",
        "alt": "Two shape optimization runs showing 90% and 75% mass targets",
        "caption": "Optimizations explored at 90% and 75% remaining mass (report, p. 5)"
      },
      {
        "src": "assets/media/bed-frame-original-stress.webp",
        "alt": "Initial bed frame von Mises stress distribution",
        "caption": "Original modeled stress distribution (report, p. 4)"
      },
      {
        "src": "assets/media/bed-frame-final-stress.webp",
        "alt": "Optimized bed frame von Mises stress distribution",
        "caption": "Final modeled stress distribution (report, p. 6)"
      }
    ],
    "documents": [
      {
        "label": "Read the FEA report (PDF)",
        "href": "documents/bed-frame-fea-report.pdf"
      }
    ],
    "sourceNote": "The report uses a quarter-model and a 300 lb full-frame design load. The 25% reduction and stress figures come from Fusion 360 simulation.",
    "nextSteps": "Add a succinct material-mass comparison table and an analytical check for a critical beam.",
    "number": "05"
  },
  {
    "id": "rocket-project",
    "number": "06",
    "title": "Rocket Controls & Airframe Design",
    "descriptor": "Flight dynamics · Simulation · Fabrication",
    "year": "2024–2025",
    "categories": [
      "Systems",
      "Mechanical"
    ],
    "featured": false,
    "image": "assets/media/rocket-project-cover.webp",
    "role": "Aerospace Engineer · Gaucho Rocket Project",
    "timeline": "August 2024 – June 2025",
    "summary": "Contributed to rocket controls modeling and aerodynamic hardware design, bridging vehicle dynamics, simulation, CAD, and prototyping.",
    "metrics": [
      [
        "±3°",
        "Stability design target"
      ],
      [
        "<1 m/s",
        "Landing-speed target"
      ],
      [
        "PID/TVC",
        "Control modeling"
      ]
    ],
    "challenge": "Support vehicle stability and landing-control design while developing manufacturable aerodynamic components.",
    "process": [
      [
        "Model dynamics",
        "Modeled PID and thrust-vector-control behavior in Simulink and Python to investigate attitude and landing performance."
      ],
      [
        "Develop hardware",
        "Designed rocket fins in CAD and fabricated prototypes through 3D printing."
      ],
      [
        "Connect disciplines",
        "Considered how aerodynamic stability and the control approach affected overall rocket behavior."
      ]
    ],
    "result": "Built control models around a ±3° stability target and <1 m/s landing-velocity target; these values describe project goals rather than verified flight-test results.",
    "contribution": "Contributed to controls modeling and designed and fabricated fins for the Gaucho Rocket Project.",
    "tools": [
      "Simulink",
      "Python",
      "PID control",
      "CAD",
      "3D printing"
    ],
    "nextSteps": "Add simulation plots and fin CAD images to show individual controls and hardware contributions.",
    "imageAlt": "Altaris rocket on its launch rail at a Gaucho Rocket Project launch site, captured from the supplied team video",
    "imageLabel": "GAUCHO ROCKET FOOTAGE",
    "gallery": [
      {
        "src": "assets/media/rocket-launch-poster.webp",
        "alt": "Altaris rocket and launch rail before takeoff",
        "caption": "Altaris rocket on the launch rail before liftoff"
      },
      {
        "src": "assets/media/rocket-onboard-view.webp",
        "alt": "View toward the launch structure recorded by an onboard camera",
        "caption": "Onboard camera view during the launch sequence"
      }
    ],
    "documents": [],
    "video": {
      "src": "assets/media/rocket-launch-demo.mp4",
      "poster": "assets/media/rocket-launch-poster.webp",
      "caption": "Altaris rocket launch footage from the Gaucho Rocket Project; my controls-modeling and fin-design contributions are described below."
    },
    "sourceNote": "Launch video supplied by the user, showing an Altaris rocket with Gaucho Rocket Project branding. This is team footage, not direct evidence of an individual engineering contribution or validation of simulation targets."
  },
  {
    "id": "air-motor",
    "number": "07",
    "title": "Precision-Machined Air Motor",
    "descriptor": "Manufacturing · Machining · Assembly",
    "year": "2025",
    "categories": [
      "Mechanical"
    ],
    "featured": false,
    "image": "assets/motor.svg",
    "role": "Machine Shop Course Project",
    "timeline": "May 2025",
    "summary": "Machined and assembled a 5,000 RPM air motor using manual milling, turning, drilling, and precision finishing processes.",
    "metrics": [
      [
        "5,000",
        "RPM"
      ],
      [
        "Mill",
        "Manual machining"
      ],
      [
        "Lathe",
        "Precision turning"
      ]
    ],
    "challenge": "Manufacture and assemble closely fitting mechanical components using manual machine-shop equipment.",
    "process": [
      [
        "Plan operations",
        "Identified appropriate machining operations for the required geometry and assembly."
      ],
      [
        "Fabricate",
        "Used manual mill, lathe, and drill operations with precision finishing."
      ],
      [
        "Assemble",
        "Brought manufactured components together into a functioning air-motor assembly."
      ]
    ],
    "result": "Completed fabrication and assembly of a 5,000 RPM air motor as a machine-shop project.",
    "contribution": "Performed manufacturing operations and mechanical assembly.",
    "tools": [
      "Manual mill",
      "Lathe",
      "Drill press",
      "Mechanical assembly"
    ],
    "nextSteps": "Add machining progress photos, an exploded assembly view, and any measured speed/test data.",
    "imageAlt": "Illustrative graphic representing the project; a verified project photograph has not yet been supplied.",
    "imageLabel": "ILLUSTRATIVE GRAPHIC",
    "gallery": [],
    "documents": []
  },
  {
    "id": "dog-feeder",
    "number": "08",
    "title": "Automatic Dog Feeder",
    "descriptor": "Mechatronics · Embedded controls",
    "year": "2024",
    "categories": [
      "Systems",
      "Mechanical"
    ],
    "featured": false,
    "image": "assets/feeder.svg",
    "role": "Digital Design Course Project",
    "timeline": "June 2024",
    "summary": "Designed and prototyped an automated feeder using SolidWorks, 3D printing, Arduino-based controls, and custom circuitry.",
    "metrics": [
      [
        "CAD",
        "Mechanical layout"
      ],
      [
        "3D",
        "Printed prototype"
      ],
      [
        "Arduino",
        "Embedded control"
      ]
    ],
    "challenge": "Create a small electromechanical product capable of automated dispensing.",
    "process": [
      [
        "Design",
        "Modeled mechanical components and their assembly in SolidWorks."
      ],
      [
        "Build",
        "Fabricated parts using 3D printing and assembled the prototype."
      ],
      [
        "Control",
        "Developed Arduino logic and custom circuitry for automatic dispensing."
      ]
    ],
    "result": "Produced a functional course prototype combining mechanical hardware and embedded electronics.",
    "contribution": "Designed the physical product and helped implement the electronic control system.",
    "tools": [
      "SolidWorks",
      "3D printing",
      "Arduino",
      "Circuit prototyping"
    ],
    "nextSteps": "Add feeder photos, CAD screenshots, a block diagram, and a short demo video.",
    "imageAlt": "Illustrative graphic representing the project; a verified project photograph has not yet been supplied.",
    "imageLabel": "ILLUSTRATIVE GRAPHIC",
    "gallery": [],
    "documents": []
  },
  {
    "id": "business-automation",
    "number": "09",
    "title": "Enterprise AI & Workflow Automation",
    "descriptor": "Systems integration · Software automation",
    "year": "2026",
    "categories": [
      "Software",
      "Systems"
    ],
    "featured": false,
    "image": "assets/automation.svg",
    "role": "Business Automation & AI Solutions Developer · Farm Credit East",
    "timeline": "June 2026 – Present",
    "summary": "Built and deployed AI-enabled workflows and employee-facing information systems using Microsoft Power Platform, Copilot Studio, Azure, and SharePoint.",
    "metrics": [
      [
        "3,300+",
        "Annual hours of capacity"
      ],
      [
        "20+",
        "Users of deployed tools"
      ],
      [
        "40K+",
        "Documents in HR-agent design"
      ]
    ],
    "challenge": "Reduce repetitive work and make large volumes of institutional information easier to access through dependable internal systems.",
    "process": [
      [
        "Map workflows",
        "Identified repeatable information-handling tasks and opportunities for automation."
      ],
      [
        "Integrate systems",
        "Built AI agents and workflows across Microsoft Power Platform, Copilot Studio, Azure, and SharePoint."
      ],
      [
        "Validate",
        "Tested failure cases and response guardrails for an HR agent designed to support a broad employee population."
      ]
    ],
    "result": "Deployed automation estimated to generate 3,300+ employee-hours of annual operational capacity. Other tools reached 20+ employees and reduced information lookup times.",
    "contribution": "Designed, implemented, and deployed workflows and internal AI systems. The HR-agent work involved integrating 40,000+ documents in the system design.",
    "tools": [
      "Power Platform",
      "Copilot Studio",
      "Azure",
      "SharePoint",
      "Automation"
    ],
    "nextSteps": "Before posting screenshots or architecture details, verify that all material is approved for public sharing by your employer.",
    "imageAlt": "Illustrative graphic representing the project; a verified project photograph has not yet been supplied.",
    "imageLabel": "ILLUSTRATIVE GRAPHIC",
    "gallery": [],
    "documents": []
  }
];
