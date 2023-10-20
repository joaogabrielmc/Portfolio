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
    <Card className="mt-6 md:w-96 w-full bg-black/50">
      <CardBody>
        <img src={imageUrl} alt={title} className="mb-4 h-16 w-16 text-white" />
        <Typography
          variant="h5"
          color="white"
          className="mb-2 font-baumans text-primary"
        >
          {title}
        </Typography>
        <Typography className="font-baimj text-white">{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default CardWithLink;
