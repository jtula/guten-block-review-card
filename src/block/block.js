/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * BLOCK: review-card
 *
 * based on Andy Bell series: "Learning Gutenberg"
 * https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/
 *
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

import {
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("review-card/main", {
  title: "Card",
  icon: "heart",
  category: "common",
  attributes: {
    id: {
      source: "attribute",
      selector: "div.slide",
      attribute: "id",
    },
    showButtons: { type: "boolean", default: true },
    reviews: {
      source: "query",
      default: [],
      selector: "div.review",
      query: {
        index: { source: "text", selector: "div.review-index" },
        image: {
          source: "attribute",
          selector: "img",
          attribute: "src",
        },
        title: { source: "html", selector: "div.review-title" },
        content: { source: "html", selector: "div.review-content" },
        author: { source: "html", selector: "div.review-author" },
      },
    },
  },
  edit(props) {
    const { attributes, className, setAttributes } = props;
    const { reviews, showButtons } = attributes;

    const ALLOWED_MEDIA_TYPES = ["image"];

    if (!attributes.id) {
      const id = `review${Math.floor(Math.random() * 100)}`;
      setAttributes({
        id,
      });
    }

    const reviewList = reviews
      .sort((a, b) => a.index - b.index)
      .map((review) => {
        return (
          <div key={review.index} className="review-slider">
            <button
              className="remove-review"
              onClick={() => {
                const newReviews = reviews
                  .filter((item) => item.index !== review.index)
                  .map((t) => {
                    if (t.index > review.index) {
                      t.index -= 1;
                    }

                    return t;
                  });

                setAttributes({
                  reviews: newReviews,
                });
              }}
            >
              x
            </button>
            <div className="wp-block-review-quote">
              <div className="wp-block-review-content">
                <div className="gts__picture">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) => {
                        const image = media.sizes.medium
                          ? media.sizes.medium.url
                          : media.url;
                        const newObject = Object.assign({}, review, {
                          image,
                        });
                        setAttributes({
                          reviews: [
                            ...reviews.filter(
                              (item) => item.index !== review.index
                            ),
                            newObject,
                          ],
                        });
                      }}
                      allowedTypes={ALLOWED_MEDIA_TYPES}
                      type="image"
                      value={review.image}
                      render={({ open }) =>
                        review.image ? (
                          <div
                            className="gts__picture__image"
                            style={{
                              backgroundImage: `url(${review.image})`,
                            }}
                            onClick={open}
                          />
                        ) : (
                          <button
                            href="#"
                            className="gts__picture__image"
                            onClick={open}
                          >
                            Select Image
                          </button>
                        )
                      }
                    />
                  </MediaUploadCheck>
                </div>
                <RichText
                  className="content-plain-text"
                  allowedFormats={["core/bold", "core/italic"]}
                  style={{ height: 58 }}
                  placeholder="Title"
                  value={review.title}
                  formattingControls={["bold", "italic", "underline"]}
                  onChange={(title) => {
                    const newObject = Object.assign({}, review, {
                      title,
                    });
                    setAttributes({
                      reviews: [
                        ...reviews.filter(
                          (item) => item.index !== review.index
                        ),
                        newObject,
                      ],
                    });
                  }}
                />
                <RichText
                  className="author-plain-text"
                  placeholder="Content"
                  value={review.content}
                  onChange={(content) => {
                    const newObject = Object.assign({}, review, {
                      content,
                    });
                    setAttributes({
                      reviews: [
                        ...reviews.filter(
                          (item) => item.index !== review.index
                        ),
                        newObject,
                      ],
                    });
                  }}
                />
                <RichText
                  className="link-plain-text"
                  placeholder="Author"
                  value={review.author}
                  onChange={(author) => {
                    const newObject = Object.assign({}, review, {
                      author,
                    });
                    setAttributes({
                      reviews: [
                        ...reviews.filter(
                          (item) => item.index !== review.index
                        ),
                        newObject,
                      ],
                    });
                  }}
                />
              </div>
            </div>
          </div>
        );
      });

    const handleButtons = () => {
      setAttributes({ showButtons: !showButtons });
    };

    return (
      <div className={className}>
        <button
          className="add-more-review"
          onClick={() =>
            setAttributes({
              reviews: [
                ...attributes.reviews,
                {
                  index: attributes.reviews.length,
                  url: "",
                  title: "",
                  content: "",
                  author: "",
                },
              ],
            })
          }
        >
          +
        </button>
        <label className="show-button" for="show-button">
          Show Buttons
        </label>
        <input
          type="checkbox"
          id="show-button"
          name="show-button"
          checked={showButtons}
          onClick={handleButtons}
        />
        <div className="review-card-wrapper">{reviewList}</div>
      </div>
    );
  },

  save({ attributes }) {
    const { id, reviews, showButtons } = attributes;
    const reviewsList = reviews.map((review) => {
      return (
        <div className="carousel-cell review-slider review" key={review.index}>
          <div className="review-index" style={{ display: "none" }}>
            {review.index}
          </div>
          <div className="wp-block-review-quote">
            <div className="wp-block-review-content">
              {review.image && (
                <div className="gts__picture">
                  <img src={review.image} style={{ display: "none" }} />
                  <div
                    className="gts__picture__image"
                    style={{
                      backgroundImage: `url(${review.image})`,
                    }}
                  />
                </div>
              )}
              <RichText.Content
                tagName="div"
                className="review-title"
                allowedFormats={["core/bold", "core/italic"]}
                formattingControls={["bold", "italic", "underline"]}
                value={review.title}
              />
              <RichText.Content
                tagName="div"
                className="review-content"
                value={review.content}
              />
              <RichText.Content
                tagName="div"
                className="review-author"
                value={review.author}
              />
            </div>
          </div>
        </div>
      );
    });

    if (reviews.length > 0) {
      const str = `{ "groupCells": true, "autoPlay": true, "prevNextButtons": ${showButtons}, "pageDots": ${showButtons} }`;

      return (
        <div className="carousel slide" data-flickity={str} id={id}>
          {reviewsList}
        </div>
      );
    }
    return null;
  },
});
