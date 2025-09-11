import React from 'react';
import './App.css';

function App() {
  // Profile data
  const profile = {
    name: 'Sara Shimmer',
    avatar: '/profile.jpg',
    cover: '/record.jpg',
  };

  // Example album data
  // Timeline state for reviews
  const [timeline, setTimeline] = React.useState([
    {
      id: 1,
      user: 'Stevie Nicks',
      album: 'Rumours',
      artist: 'Fleetwood Mac',
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
      text: 'Timeless classic! Every track is gold.',
      rating: 5,
      date: '1977-02-04'
    },
    {
      id: 2,
      user: 'Paul McCartney',
      album: 'Abbey Road',
      artist: 'The Beatles',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
      text: 'Iconic album cover and sound.',
      rating: 5,
      date: '1969-09-26'
    },
    {
      id: 3,
      user: 'Lindsey Buckingham',
      album: 'Rumours',
      artist: 'Fleetwood Mac',
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
      text: 'The harmonies are unmatched.',
      rating: 4,
      date: '1977-02-05'
    }
  ]);

  // Review form state
  const [reviewForm, setReviewForm] = React.useState({
    user: profile.name,
    album: '',
    artist: '',
    cover: '',
    text: '',
    rating: 5
  });

  // Friends list (hash map)
  const friends = {
    1: { name: 'John Lennon', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    2: { name: 'Stevie Nicks', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    3: { name: 'David Bowie', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    4: { name: 'Donna Summer', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' }
  };

  // Handle review form input
  function handleReviewChange(e) {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  }

  // Handle review submission
  function handleReviewSubmit(e) {
    e.preventDefault();
    if (!reviewForm.album || !reviewForm.artist || !reviewForm.cover || !reviewForm.text) return;
    setTimeline(prev => [
      ...prev,
      {
        ...reviewForm,
        id: prev.length + 1,
        date: new Date().toISOString().split('T')[0]
      }
    ]);
    setReviewForm({
      user: profile.name,
      album: '',
      artist: '',
      cover: '',
      text: '',
      rating: 5
    });
  }
  return (
    <div className="App" style={{
      background: 'linear-gradient(135deg, #f7b32b 0%, #f7c873 60%, #6a0572 100%)',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'Chicle',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
  <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', width: '100%' }}>
        {/* Sidebar */}
        <aside style={{
          width: '260px',
          background: 'linear-gradient(135deg, #f7b32b 0%, #f72b7b 80%, #6a0572 100%)',
          color: '#fff',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '2px 0 10px #000',
          minHeight: '100vh'
        }}>
          <img src={profile.avatar} alt={profile.name} style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #f72b7b', marginBottom: '1rem' }} />
          <h2 style={{ fontFamily: 'Chicle', fontSize: '1.5rem', color: '#f7b32b', marginBottom: '0.5rem' }}>{profile.name}</h2>
          <div style={{ marginBottom: '2rem', color: '#fffbe7', fontSize: '1rem' }}>@groovyqueen</div>
          <nav style={{ width: '100%' }}>
            <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{ margin: '1rem 0', textAlign: 'center', cursor: 'pointer', fontSize: '1.2rem', color: '#fffbe7' }}> Home</li>
              <li style={{ margin: '1rem 0', textAlign: 'center', cursor: 'pointer', fontSize: '1.2rem', color: '#fffbe7' }}> Notifications</li>
              <li style={{ margin: '1rem 0', textAlign: 'center', cursor: 'pointer', fontSize: '1.2rem', color: '#fffbe7' }}> Messages</li>
              <li style={{ margin: '1rem 0', textAlign: 'center', cursor: 'pointer', fontSize: '1.2rem', color: '#fffbe7' }}> Settings</li>
            </ul>
          </nav>
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <h3 style={{ color: '#f7b32b', marginBottom: '1rem', textAlign: 'center' }}>Friends</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {Object.values(friends).map((friend, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', background: '#fffbe7', borderRadius: '1rem', padding: '0.5rem 1rem', color: '#6a0572' }}>
                  <img src={friend.avatar} alt={friend.name} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #f72b7b' }} />
                  <span style={{ fontWeight: 'bold' }}>{friend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
  {/* Main Content */}
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '100vh', boxSizing: 'border-box', paddingLeft: '2rem', paddingRight: '2rem',  }}>
          {/* Profile Cover Art */}
          <div style={{position: 'relative', width: '100%', maxWidth: '900px', height: '220px', margin: '2rem 0 0 0', overflow: 'hidden', borderRadius: '1.5rem 1.5rem 0 0', boxShadow: '0 0 20px #f7b32b', boxSizing: 'border-box' }}>
            <img src={profile.cover} alt="Cover Art" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.5) saturate(1.2) hue-rotate(-20deg)' }} />
            {/* Profile Name on Cover */}
            <div style={{ fontFamily: 'Chicle', position: 'absolute', left: 30, bottom: 10, color: '#6da95cff', fontSize: '2rem', textShadow: '2px 2px 0 #fed91bff' }}>{profile.name}</div>
          </div>
          {/* Review Submission Box */}
          <form onSubmit={handleReviewSubmit} style={{ width: '100%', maxWidth: 900, margin: '0 0 2rem 0', background: '#ffffffff', borderRadius: '0 0 1.5rem 1.5rem', boxShadow: '0 0 10px #f7b32b', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img src={profile.avatar} alt={profile.name} style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #f72b7b' }} />
              <input name="album" value={reviewForm.album} onChange={handleReviewChange} type="text" placeholder="Album name" style={{ flex: 1, border: 'none', borderRadius: '1rem', padding: '0.75rem', fontSize: '1rem', background: '#fffbe7', outline: 'none', color: '#6a0572' }} />
              <input name="artist" value={reviewForm.artist} onChange={handleReviewChange} type="text" placeholder="Artist" style={{ flex: 1, border: 'none', borderRadius: '1rem', padding: '0.75rem', fontSize: '1rem', background: '#fffbe7', outline: 'none', color: '#6a0572' }} />
            </div>
            <input name="cover" value={reviewForm.cover} onChange={handleReviewChange} type="text" placeholder="Album cover URL" style={{ border: 'none', borderRadius: '1rem', padding: '0.75rem', fontSize: '1rem', background: '#fffbe7', outline: 'none', color: '#6a0572' }} />
            <textarea name="text" value={reviewForm.text} onChange={handleReviewChange} placeholder="Your review..." style={{ border: 'none', borderRadius: '1rem', padding: '0.75rem', fontSize: '1rem', background: '#fffbe7', outline: 'none', resize: 'vertical', color: '#6a0572' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ color: '#6a0572', fontWeight: 'bold' }}>Rating:</label>
              <select name="rating" value={reviewForm.rating} onChange={handleReviewChange} style={{ borderRadius: '1rem', padding: '0.5rem', fontSize: '1rem' }}>
                {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>)}
              </select>
              <button type="submit" style={{ background: '#f72b7b', color: '#fff', border: 'none', borderRadius: '1rem', padding: '0.5rem 1.5rem', cursor: 'pointer', fontWeight: 'bold' }}>Post Review</button>
            </div>
          </form>
          {/* Timeline Feed (Chronological) */}
          <main style={{ width: '100%', maxWidth: 900, margin: '0', background: 'rgba(255,255,255,0.92)', borderRadius: '1.5rem', boxShadow: '0 0 10px #f7b32b', padding: '2rem', minHeight: '60vh', boxSizing: 'border-box' }}>
            <h2 style={{ color: '#6a0572', marginBottom: '2rem' }}>Timeline</h2>
            {timeline
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map(post => (
                <div key={post.id} style={{ marginBottom: '2rem', padding: '1rem', borderRadius: '1rem', background: '#fffbe7', boxShadow: '0 0 8px #f7b32b', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <img src={post.cover} alt={post.album} style={{ width: 100, height: 100, borderRadius: '1rem', objectFit: 'cover', boxShadow: '0 0 6px #f7b32b' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: '#f72b7b', fontSize: '1.3rem' }}>{post.album}</div>
                    <div style={{ color: '#6a0572', fontSize: '1.1rem', marginBottom: '0.5rem' }}>by {post.artist}</div>
                    <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Posted by {post.user} on {new Date(post.date).toLocaleDateString()}</div>
                    <div style={{ marginBottom: '0.5rem' }}>{post.text}</div>
                    <span style={{ color: '#f7b32b', fontWeight: 'bold' }}>{'★'.repeat(post.rating)}</span>
                  </div>
                </div>
              ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
