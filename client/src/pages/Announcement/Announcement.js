import React, { useState } from 'react';
import './Announcements.scss';
import { useQuery } from '@apollo/client';
import { QUERY_NOTE } from '../../utils/queries';
import NoteModal from '../../components/NoteModal/NoteModal';
import Auth from '../../utils/auth';

const Announcement = () => {
  const { loading, data: noteData, refetch } = useQuery(QUERY_NOTE);
  const announcements = noteData?.note[0] || { header: '', body: '' };
  console.log(announcements, loading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const loggedIn = Auth.loggedIn();
  const admin = Auth.adminLogIn();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!loggedIn) {
    return (
      <div className="cheat-container">
        <h3 className="cheat-text">
          You need to log in first. Don't cheat by looking at something you're
          not supposed to. <br />
          Makes me think you cheat at golf too
        </h3>
      </div>
    );
  }

  return (
    <>
      <div id="announcement">
        <div className="background">
          <div className="background2">
            <h2 className="head-text">Announcements</h2>

            {isModalOpen && (
              <NoteModal
                announcement={announcements}
                onClose={toggleModal}
                refetchAnnouncements={refetch}
              />
            )}
            {loading ? (
              <h4>Loading</h4>
            ) : (
              <>
                <h4 className="h4-text">{announcements.header}</h4>
                <p className="p-text">{announcements.body}</p>
              </>
            )}

            {loggedIn ? (
              <div className="app__flex">
                {admin ? (
                  <button type="button" onClick={() => toggleModal()}>
                    Edit Announcement
                  </button>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
