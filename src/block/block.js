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
      id: { type: "number " },
    },
    reviews: {
      source: "query",
      default: [],
      query: {
        index: { type: "number" },
        url: { type: "string", default: "" },
        alt: { type: "string" },
        title: { type: "string" },
        content: { type: "string" },
        author: { type: "string" },
      },
    },
  },
  edit(props) {
    const { attributes, className, setAttributes } = props;
    const { reviews } = attributes;

    const ALLOWED_MEDIA_TYPES = ["image"];

    if (!attributes.id) {
      const id = `review${Math.floor(Math.random() * 100)}`;
      setAttributes({
        id,
      });
    }

    const reviewList = reviews
      .sort((a, b) => a.index - b.index)
      .map((review, idx) => {
        return (
          <div key={idx} className="review-slider">
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
                        const url = media.sizes.medium
                          ? media.sizes.medium.url
                          : media.url;
                        const newObject = Object.assign({}, review, {
                          url,
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
                      value={review.url}
                      render={({ open }) =>
                        review.url ? (
                          <div
                            className="gts__picture__image"
                            style={{
                              backgroundImage: `url(${review.url})`,
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

    return (
      <div className={className}>
        <div className="review-card-wrapper">{reviewList}</div>
        <button
          className="add-more-review"
          onClick={() =>
            setAttributes({
              reviews: [
                ...attributes.reviews,
                {
                  index: attributes.reviews.length,
                  url: "",
                  alt: "",
                  title: "",
                  content: "",
                  author: "",
                  position: "",
                },
              ],
            })
          }
        >
          +
        </button>
      </div>
    );
  },

  save({ attributes }) {
    const { id, reviews } = attributes;
    const reviewsList = reviews.map((review) => {
      return (
        <div className="carousel-cell review-slider" key={review.index}>
          <div className="wp-block-review-quote">
            <div className="wp-block-review-content">
              {review.url && (
                <div className="gts__picture">
                  <div
                    className="gts__picture__image"
                    style={{
                      backgroundImage: `url(${review.url})`,
                    }}
                  />
                </div>
              )}
              <div>
                <RichText.Content value={review.title} />
              </div>
              <div>
                <RichText.Content value={review.content} />
              </div>
              <div>
                <RichText.Content value={review.author} />
              </div>
            </div>
          </div>
        </div>
      );
    });

    if (reviews.length > 0) {
      return (
        <div
          className="carousel"
          data-flickity='{ "groupCells": true, "autoPlay": true }'
        >
          {reviewsList}
        </div>
      );
    }
    return <div></div>;
  },
});
