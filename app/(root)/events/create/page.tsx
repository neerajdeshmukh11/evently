<<<<<<< HEAD
'use client'
=======
>>>>>>> fdbd7d2814a702dd75cbf641692c67bb6999a2ba
import EventForm from "@/components/shared/EventForm";
import { useAuth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { userId, isLoaded } = useAuth();
<<<<<<< HEAD
  
=======

>>>>>>> fdbd7d2814a702dd75cbf641692c67bb6999a2ba
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        {/* Render the EventForm only when the user is authenticated */}
        {isLoaded && userId ? (
          <EventForm userId={userId} type="Create" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default CreateEvent;
