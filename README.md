# 🎬 Movie Recommendation System

A content-based movie recommendation system built with Python that suggests movies similar to your favourite one using **TF-IDF Vectorization** and **Cosine Similarity**.

---

## 📌 How It Works

1. User inputs their favourite movie name
2. The system finds the closest matching title in the dataset using `difflib`
3. Movie features (genres, keywords, tagline, cast, director) are combined and converted into numerical vectors using **TF-IDF Vectorizer**
4. **Cosine Similarity** computes how similar each movie is to the input movie
5. Top 10 most similar movies are returned as recommendations

---

## 🧰 Libraries Used

| Library | Purpose |
|--------|---------|
| `numpy` | Numerical computations |
| `pandas` | Loading and manipulating the dataset |
| `difflib` | Finding the closest movie title match to user input |
| `sklearn (TfidfVectorizer)` | Converting text features into numerical vectors |
| `sklearn (cosine_similarity)` | Computing similarity scores between movies |

---

## 📂 Dataset

The system uses a movies CSV file (`movies.csv`) containing the following features:

- `title` — Movie title
- `genres` — Movie genres
- `keywords` — Keywords associated with the movie
- `tagline` — Movie tagline
- `cast` — Main cast members
- `director` — Movie director

---

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-recommendation-system.git
cd movie-recommendation-system
```

2. Install required libraries:
```bash
pip install numpy pandas scikit-learn
```

3. Add your `movies.csv` dataset to the project directory.

---

## 🚀 Usage

Run the notebook or script and enter your favourite movie when prompted:

```
Enter your favourite movie name: Avatar
```

**Output:**
```
Movies suggested for you:

1. Guardians of the Galaxy
2. Interstellar
3. The Avengers
4. Star Trek Into Darkness
5. ...
```

---

## 🧠 Key Concepts

**TF-IDF (Term Frequency - Inverse Document Frequency)**
Converts text data into numerical vectors by weighing how important a word is in a document relative to the entire dataset.

**Cosine Similarity**
Measures the angle between two vectors. A score closer to 1.0 means the movies are very similar, while a score closer to 0.0 means they are unrelated. No model training is required — it is purely mathematical.

**difflib.get_close_matches**
Handles typos or slightly incorrect movie names by finding the closest matching title in the dataset.

---

## 📊 Code Overview

```python
# Load dataset
movies_data = pd.read_csv('movies.csv')

# Fill missing values
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']
for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

# Combine features
combined_features = (movies_data['genres'] + ' ' + movies_data['keywords'] + ' ' +
                     movies_data['tagline'] + ' ' + movies_data['cast'] + ' ' +
                     movies_data['director'])

# Vectorize and compute similarity
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)
similarity = cosine_similarity(feature_vectors)
```

---

## 📁 Project Structure

```
movie-recommendation-system/
│
├── movies.csv                  # Dataset
├── movie_recommendation.ipynb  # Main Jupyter Notebook
└── README.md                   # Project documentation
```

---

## 🙌 Acknowledgements

- Dataset: [TMDB Movies Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata)
- Built using [scikit-learn](https://scikit-learn.org/)
