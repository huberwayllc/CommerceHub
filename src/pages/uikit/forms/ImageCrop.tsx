import { PageBreadcrumb } from '@/components'
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Col,
	FormControl,
	Row,
} from 'react-bootstrap'
import Cropper, { ReactCropperElement } from 'react-cropper'

// styles
import 'cropperjs/dist/cropper.css'
import { useRef, useState } from 'react'

import smallImg1 from '@/assets/images/small/img-1.jpg'

const ImageCrop = () => {
	const [getData, setGetData] = useState<any>()

	const [cropX, setCropX] = useState<number | undefined>(0)
	const [cropY, setCropY] = useState<number | undefined>(0)
	const [imageWidth, setImageWidth] = useState<number | undefined>(0)
	const [imageHeight, setImageHeight] = useState<number | undefined>(0)
	const [imageRotate, setImageRotate] = useState<number | undefined>(0)
	const [scaleX, setScaleX] = useState<number | undefined>(0)
	const [scaleY, setScaleY] = useState<number | undefined>(0)

	const cropperRef = useRef<ReactCropperElement>(null)
	const cropper: any = cropperRef.current?.cropper

	const onCrop = () => {
		const cropper = cropperRef.current?.cropper
		const ImageX = Math.ceil(cropper?.getData().x ?? 0)
		const ImageY = Math.ceil(cropper?.getData().y ?? 0)
		const ImageWidth = Math.ceil(cropper?.getImageData().width ?? 0)
		const ImageHeight = Math.ceil(cropper?.getImageData().height ?? 0)
		const ImageRotate = Math.ceil(cropper?.getImageData().rotate ?? 0)
		const ScaleX = Math.ceil(cropper?.getImageData().scaleX ?? 0)
		const ScaleY = Math.ceil(cropper?.getImageData().scaleY ?? 0)

		setCropX(ImageX)
		setCropY(ImageY)
		setImageWidth(ImageWidth)
		setImageHeight(ImageHeight)
		setImageRotate(ImageRotate)
		setScaleX(ScaleX)
		setScaleY(ScaleY)
	}

	return (
		<>
			<PageBreadcrumb title="Image Cropper" subName="Forms" />
			<Row>
				<Col md="9">
					<Card>
						<CardBody>
							<div className="img-container mb-0">
								<Cropper
									src={smallImg1}
									style={{ height: 360, width: '100%' }}
									initialAspectRatio={16 / 9}
									dragMode="move"
									preview=".img-preview"
									guides={false}
									crop={onCrop}
									ref={cropperRef}
									rotatable
								/>
							</div>
						</CardBody>
					</Card>
					<div id="actions">
						<Card className="docs-buttons">
							<CardBody>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.dragMode('move')}
									>
										<span className="docs-tooltip">
											<span className="fas fa-expand-arrows-alt" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.dragMode('crop')}
									>
										<span className="docs-tooltip">
											<span className="fas fa-crop" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.zoom(0.1)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-search-plus" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.zoom(-0.1)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-search-minus" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.move(-10, 0)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-arrow-left" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.move(10, 0)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-arrow-right" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.move(0, -10)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-arrow-up" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.move(0, 10)}
									>
										<span className="docs-tooltip">
											<span className="fa fa-arrow-down" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.rotate(-45)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-reply" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.rotate(45)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-share" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.scaleX(-1)}
									>
										<span className="docs-tooltip">
											<span className="fa fa-arrows-alt-h" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.scaleY(-1)}
									>
										<span className="docs-tooltip">
											<span className="fas fa-arrows-alt-v" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.crop()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-check" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.clear()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-times" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.disable()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-lock" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.enable()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-unlock" />
										</span>
									</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-2 me-1">
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.reset()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-redo" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										className="btn btn-light btn-upload"
										title="Upload image file"
									>
										<span
											className="docs-tooltip"
											data-bs-toggle="tooltip"
											data-animation="false"
											title="Import image with Blob URLs"
										>
											<span className="fas fa-upload" />
										</span>
									</Button>
									<Button
										type="button"
										variant="light"
										onClick={() => cropper.destroy()}
									>
										<span className="docs-tooltip">
											<span className="fas fa-power-off" />
										</span>
									</Button>
								</ButtonGroup>
								<div className="d-flex justify-content-center">
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => setGetData(cropper?.imageData)}
									>
										<span className="docs-tooltip">Get Data</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										data-method="setData"
										data-target="#putData"
									>
										<span
											className="docs-tooltip"
											data-bs-toggle="tooltip"
											data-animation="false"
											title='$().cropper("setData", data)'
										>
											Set Data
										</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => setGetData(cropper?.containerData)}
									>
										<span className="docs-tooltip">Get Container Data</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => setGetData(cropper?.imageData)}
									>
										<span className="docs-tooltip">Get Image Data</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => setGetData(cropper?.canvasData)}
									>
										<span className="docs-tooltip">Get Canvas Data</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => setGetData(cropper?.cropBoxData)}
									>
										<span className="docs-tooltip">Get Crop Box Data</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => cropper.moveTo(0)}
									>
										<span className="docs-tooltip">Move to [0,0]</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => cropper.zoomTo(1)}
									>
										<span className="docs-tooltip">Zoom to 100%</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => cropper.rotate(180)}
									>
										<span className="docs-tooltip">Rotate 180°</span>
									</Button>
									<Button
										type="button"
										variant="secondary"
										className="mb-2 me-1"
										onClick={() => cropper.scale(-2, -1)}
									>
										<span className="docs-tooltip">Scale (-2, -1)</span>
									</Button>
								</div>
								<FormControl
									as="textarea"
									id="putData"
									rows={3}
									placeholder="Get data to here or set data with this value"
									value={JSON.stringify(getData)}
								/>
							</CardBody>
						</Card>
					</div>
				</Col>
				<Col md="3">
					<Card>
						<CardBody>
							{/* <h3>Preview:</h3> */}
							<div className="docs-preview clearfix">
								<div className="img-preview preview-lg" />
								<div className="img-preview preview-md" />
								<div className="img-preview preview-sm" />
								<div className="img-preview preview-xs" />
							</div>
							{/* <h3>Data:</h3> */}
							<div className="docs-data">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">X</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataX"
										placeholder="x"
										value={cropX}
										readOnly
									/>
									<div className="input-group-append">
										<span className="input-group-text">px</span>
									</div>
								</div>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">Y</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataY"
										placeholder="y"
										value={cropY}
										readOnly
									/>
									<div className="input-group-append">
										<span className="input-group-text">px</span>
									</div>
								</div>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">Width</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataWidth"
										placeholder="width"
										value={imageWidth}
										readOnly
									/>
									<div className="input-group-append">
										<span className="input-group-text">px</span>
									</div>
								</div>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">Height</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataHeight"
										placeholder="height"
										value={imageHeight}
										readOnly
									/>
									<div className="input-group-append">
										<span className="input-group-text">px</span>
									</div>
								</div>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">Rotate</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataRotate"
										placeholder="rotate"
										value={imageRotate}
										readOnly
									/>
									<div className="input-group-append">
										<span className="input-group-text">deg</span>
									</div>
								</div>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">ScaleX</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataScaleX"
										placeholder="scaleX"
										value={scaleX}
										readOnly
									/>
								</div>
								<div className="input-group mb-0">
									<div className="input-group-prepend">
										<span className="input-group-text">ScaleY</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="dataScaleY"
										placeholder="scaleY"
										value={scaleY}
										readOnly
									/>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ImageCrop
