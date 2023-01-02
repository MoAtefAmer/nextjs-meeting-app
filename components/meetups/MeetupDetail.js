import classes from "./MeetupDetail.module.css"


export default function MeetupDetail({image,title,address,description,id}) {
  return (
    <>
    <section className={classes.detail}>
      <p>{id}</p>
      <img
        src={image}
        alt={title}
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
      </section>
    </>
    
  );
}
