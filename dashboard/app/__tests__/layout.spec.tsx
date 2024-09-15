import {expect, test} from '@jest/globals';

import {render} from '@testing-library/react';

import Layout from '../layout';

test('renders default layout', async () => {
  // Act
  const {findByText} = render(<Layout children={<p>Hello World</p>} />); // eslint-disable-line react/no-children-prop
  // Assert
  const navbar = await findByText(/Overview/i);
  expect(navbar).toBeTruthy();
  // check content
  const heading = await findByText(/Hello World/i);
  expect(heading).toBeTruthy();
});
