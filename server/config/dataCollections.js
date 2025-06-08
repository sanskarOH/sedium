import connectDB from './firebase.js'

export const getUserCollection = async () => {
    const db = await connectDB();
    return db.collection('user');

};

export const getBlogCollecction = async () => {
    const db = await connectDB();
    return db.collection('blog');
}
