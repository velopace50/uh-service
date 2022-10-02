import { useState, Fragment } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface AccordionProps {
  data: Data[];
}

interface Data {
  header: String;
  body: String;
}

const TailwindAccordion = ({ data }: AccordionProps) => {
  const [open, setOpen] = useState(
    data.reduce((acc, item, idx) => {
      acc = { ...acc, [idx]: true };
      return acc;
    }, {}),
  );

  const handleOpen = (index: any) => {
    setOpen((prev: any) => {
      return {
        ...open,
        [index]: !prev[index],
      };
    });
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.8 },
  };

  return (
    <Fragment>
      {data.map(({ header, body }, index) => (
        <Accordion
          open={Object.values(open)[index] === true}
          animate={customAnimation}
          key={index}
        >
          <Accordion
            open={Object.values(open)[index] === true}
            animate={customAnimation}
          >
            <AccordionHeader onClick={() => handleOpen(index)}>
              <div
                className={`flex justify-between text-18 text-left text-light-400 font-normal w-full bg-light-50 py-28 px-30 border-x-2 border-light-200 ${
                  Object.values(open)[index]
                    ? ''
                    : 'border-b-2 border-light-200'
                }  ${
                  index === 0 ? 'rounded-t-12 border-t-2 border-light-200' : ''
                } ${
                  index === data.length - 1
                    ? Object.values(open)[index] === true
                      ? ''
                      : 'rounded-b-12'
                    : ''
                }`}
              >
                {header}
                {Object.values(open)[index] === true ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div
                className={`px-50 py-28 bg-white text-14 text-light-400 font-normal border-2 border-light-200 ${
                  index === data.length - 1 ? 'rounded-b-12' : ''
                }`}
              >
                {body}
              </div>
            </AccordionBody>
          </Accordion>
        </Accordion>
      ))}
    </Fragment>
  );
};

export default TailwindAccordion;
