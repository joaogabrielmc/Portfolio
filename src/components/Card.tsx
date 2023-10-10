import React from "react";
import {
  Card,
  CardBody,
  // CardFooter,
  // Button,
  Typography,
} from "@material-tailwind/react";

interface CardWithLinkProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardWithLink: React.FC<CardWithLinkProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="mt-6 md:w-96 w-full">
      <CardBody>
        <img src={imageUrl} alt={title} className="mb-4 h-16 w-16 text-black" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default CardWithLink;
