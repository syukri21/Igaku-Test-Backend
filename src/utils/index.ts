import * as bcrypt from 'bcrypt';

export const comparePasswords = async (userPassword, currentPassword) => {
  return await bcrypt.compareSync(currentPassword, userPassword);
};

export const createPassword = async password => {
  const hash = await bcrypt.hashSync(password, 10);
  console.log('hash', hash);
  return hash;
};
