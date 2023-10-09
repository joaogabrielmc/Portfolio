import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
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
    <Card className="mt-6 w-96">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          {imageUrl}
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default CardWithLink;
