console.log('Logger File');

const logger = () => {
  try {
    console.group('SERVER connect');
    console.log('trying to connect to server');
    console.warn('WARNING: Connection taking too long');
    console.log('still trying ');
    console.groupEnd();
    throw new Error('ERROR: Cannot reach Server');
  } catch (e) {
    console.error(e.message);
  } finally {
    console.log('trying to connect to local server:');
    console.log('Connection successfull');
  }
};

logger();
